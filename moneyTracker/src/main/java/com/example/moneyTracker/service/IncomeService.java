package com.example.moneyTracker.service;

import com.example.moneyTracker.DTOs.BiggestIncomeDTO;
import com.example.moneyTracker.DTOs.ExpenseDTO;
import com.example.moneyTracker.DTOs.IncomeDTO;
import com.example.moneyTracker.entities.Expense;
import com.example.moneyTracker.entities.Income;
import com.example.moneyTracker.entities.User;
import com.example.moneyTracker.repositories.IncomeRepository;
import com.example.moneyTracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class IncomeService {
    private final IncomeRepository incomeRepository;
    private final UserService userService;
    private final DateService dateService;

    public IncomeService(IncomeRepository incomeRepository, UserService userService, DateService dateService) {
        this.incomeRepository = incomeRepository;
        this.userService = userService;
        this.dateService = dateService;
    }

    public void addIncome(Income income) {
        incomeRepository.save(income);
    }

    public List<Income> getIncomesOfUser(String email){
        return incomeRepository.findIncomesByUserEmail(email);
    }

    public void addIncomeOfUser(IncomeDTO incomeDto, String email)  {
        Income income = new Income();
        User user = userService.findUserByEmail(email);
        income.setAmount(incomeDto.getAmount());
        income.setCurrency(incomeDto.getCurrency());
        income.setIncomeCategory(incomeDto.getIncomeCategory());
        income.setDate(new Date());
        income.setUser(user);
        List<Income> incomeList = user.getIncomes();
        incomeList.add(income);
        addIncome(income);
    }

    public Double getTotalIncomes(String email){
        User user = userService.findUserByEmail(email);
        List<Income> incomeList = user.getIncomes();
        Double sum = (double) 0;
        for (Income income : incomeList) {
            sum+=income.getAmount();
        }
        return sum;
    }

    public Double getBiggestIncomeThisMonth(String email){
        User user = userService.findUserByEmail(email);
        List<Income> incomeList = user.getIncomes();
        Double maxIncome = (double) 0;
        int currentMonthAsInt = dateService.getCurrentMonthAsInt();

        for (Income income : incomeList) {
            int monthAsInt = dateService.getMonthAsInt(income.getDate());
            if(currentMonthAsInt==monthAsInt){
                if(income.getAmount()>maxIncome){
                    maxIncome = income.getAmount();
                }
            }
        }
        return maxIncome;
    }

    public Map.Entry<String,Double> getMaxKeyAndValue(HashMap<String,Double> hashMap){
        return getStringDoubleEntry(hashMap);
    }

    public static Map.Entry<String, Double> getStringDoubleEntry(HashMap<String, Double> hashMap) {
        Map.Entry<String, Double> maxEntry = null;
        for (Map.Entry<String, Double> stringDoubleEntry : hashMap.entrySet()) {
            if (maxEntry == null || stringDoubleEntry.getValue().compareTo(maxEntry.getValue()) > 0)
            {
                maxEntry = stringDoubleEntry;
            }
        }
        return maxEntry;
    }

    public Map.Entry<String,Double> getBiggestIncome(String email){
        User user = userService.findUserByEmail(email);
        List<Income> incomeList = user.getIncomes();
        int currentMonthAsInt = dateService.getCurrentMonthAsInt();
        HashMap<String, Double> hashMap = new HashMap<>();
        for (Income income : incomeList) {
            int monthAsInt = dateService.getMonthAsInt(income.getDate());
            if(currentMonthAsInt == monthAsInt){
                hashMap.merge(income.getIncomeCategory(),income.getAmount(),Double::sum);
            }
        }
        return getMaxKeyAndValue(hashMap);
    }

    public BiggestIncomeDTO getBiggestIncomeDTO(String email){
        Map.Entry<String,Double> entry = getBiggestIncome(email);
        BiggestIncomeDTO biggestIncomeDTO = new BiggestIncomeDTO();
        biggestIncomeDTO.setCategory(entry.getKey());
        biggestIncomeDTO.setAmount(entry.getValue());
        return biggestIncomeDTO;
    }

    public List<Income> getIncomesPerMonth(String email){
        User user = userService.findUserByEmail(email);
        List<Income> incomeList = user.getIncomes();
        int currentMonthAsInt = dateService.getCurrentMonthAsInt();
        List<Income> incomesOfTheCurrentMonth =  new ArrayList<>();
        for (Income income : incomeList) {
            int monthAsInt = dateService.getMonthAsInt(income.getDate());
            if(currentMonthAsInt == monthAsInt){
                incomesOfTheCurrentMonth.add(income);
            }
        }
        return incomesOfTheCurrentMonth;
    }
    public List<IncomeDTO> getIncomesDTOPerMonth(String email){
        List<IncomeDTO> incomeDTOList = new ArrayList<>();
        List<Income> incomeList = getIncomesPerMonth(email);
        Map<String, Double> result = incomeList.stream()
                .collect(Collectors.groupingBy(Income::getIncomeCategory,
                        Collectors.summingDouble(Income::getAmount)));
        for (Map.Entry<String, Double> stringDoubleEntry : result.entrySet()) {
            IncomeDTO incomeDTO = new IncomeDTO();
            incomeDTO.setIncomeCategory(stringDoubleEntry.getKey());
            incomeDTO.setAmount(stringDoubleEntry.getValue());
            incomeDTOList.add(incomeDTO);
        }
        return incomeDTOList;
    }



}
