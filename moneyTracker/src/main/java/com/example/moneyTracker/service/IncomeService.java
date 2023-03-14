package com.example.moneyTracker.service;

import com.example.moneyTracker.DTOs.IncomeDTO;
import com.example.moneyTracker.entities.Income;
import com.example.moneyTracker.entities.User;
import com.example.moneyTracker.repositories.IncomeRepository;
import com.example.moneyTracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
public class IncomeService {
    private final IncomeRepository incomeRepository;
    private final UserRepository userRepository;
    @Autowired
    public IncomeService(IncomeRepository incomeRepository, UserRepository userRepository) {
        this.incomeRepository = incomeRepository;
        this.userRepository = userRepository;
    }

    public void addIncome(Income income) {
        incomeRepository.save(income);
    }

    public List<Income> getIncomesOfUser(String email){
        return incomeRepository.findIncomesByUserEmail(email);
    }

    public void addIncomeOfUser(IncomeDTO incomeDto, String email)  {
        Income income = new Income();
        User user = userRepository.findUserByEmail(email);
        income.setAmount(incomeDto.getAmount());
        income.setCurrency(incomeDto.getCurrency());
        income.setIncomeCategory(incomeDto.getIncomeCategory());
        income.setUser(user);
        List<Income> incomeList = user.getIncomes();
        incomeList.add(income);
        addIncome(income);
    }

    public Double getTotalIncomes(String email){
        User user = userRepository.findUserByEmail(email);
        List<Income> incomeList = user.getIncomes();
        Double sum = (double) 0;
        for (Income income : incomeList) {
            sum+=income.getAmount();
        }
        return sum;
    }

    public int getMonthAsInt(Date date){
        LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        int month = localDate.getMonthValue();
        System.out.println(month);
        return month;
    }

    public int getCurrentMonthAsInt(){
        Date date = new Date();
        LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        int currentMonthAsInt = localDate.getMonthValue();
        System.out.println(currentMonthAsInt);
        return currentMonthAsInt;
    }

    public Double getBiggestIncomeThisMonth(String email){
        User user = userRepository.findUserByEmail(email);
        List<Income> incomeList = user.getIncomes();
        Double maxIncome = (double) 0;
        int currentMonthAsInt = getCurrentMonthAsInt();

        for (Income income : incomeList) {
            int monthAsInt = getMonthAsInt(income.getDate());
            System.out.println(monthAsInt);
            if(currentMonthAsInt==monthAsInt){
                if(income.getAmount()>maxIncome){
                    maxIncome = income.getAmount();
                }
            }

        }
        return maxIncome;
    }




}
