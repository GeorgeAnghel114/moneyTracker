package com.example.moneyTracker.service;

import com.example.moneyTracker.DTOs.BiggestExpenseDTO;
import com.example.moneyTracker.DTOs.ExpenseDTO;
import com.example.moneyTracker.entities.Expense;
import com.example.moneyTracker.entities.User;
import com.example.moneyTracker.repositories.ExpenseRepository;
import com.example.moneyTracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.example.moneyTracker.service.IncomeService.getStringDoubleEntry;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;
    private final DateService dateService;
    @Autowired
    public ExpenseService(ExpenseRepository expenseRepository, UserRepository userRepository, DateService dateService) {
        this.expenseRepository = expenseRepository;
        this.userRepository = userRepository;
        this.dateService = dateService;
    }

    public void addExpense(Expense expense) {
        expenseRepository.save(expense);
    }

    public List<Expense> getExpensesOfUser(String email){
        return expenseRepository.findExpenseByUserEmail(email);
    }

    public void addExpenseOfUser(ExpenseDTO expenseDTO, String email)  {
        Expense expense = new Expense();
        User user = userRepository.findUserByEmail(email);
        expense.setAmount(expenseDTO.getAmount());
        expense.setCurrency(expenseDTO.getCurrency());
        expense.setExpenseCategory(expenseDTO.getExpenseCategory());
        expense.setUser(user);
        expense.setDate(new Date());
        List<Expense> expenseList = user.getExpenses();
        expenseList.add(expense);
        addExpense(expense);
    }

    public Double getTotalCostExpenses(String email){
        User user = userRepository.findUserByEmail(email);
        List<Expense> expenses =  user.getExpenses();
        Double sum = (double) 0;
        int currentMontAsInt = dateService.getCurrentMonthAsInt();
        for (Expense expens : expenses) {
            int monthAsInt = dateService.getMonthAsInt(expens.getDate());
            if(currentMontAsInt == monthAsInt){
                sum += expens.getAmount();
            }
        }
        return sum;
    }
    public Map.Entry<String,Double> getMaxKeyAndValue(HashMap<String,Double> hashMap){
        return getStringDoubleEntry(hashMap);
    }
    public Map.Entry<String,Double> getBiggestExpense(String email){
        User user = userRepository.findUserByEmail(email);
        List<Expense> expenseList = user.getExpenses();
        int currentMonthAsInt = dateService.getCurrentMonthAsInt();
        HashMap<String, Double> hashMap = new HashMap<>();
        for (Expense expense : expenseList) {
            int monthAsInt = dateService.getMonthAsInt(expense.getDate());
            if(currentMonthAsInt == monthAsInt){
                hashMap.merge(expense.getExpenseCategory(),expense.getAmount(),Double::sum);
            }
        }
        return getMaxKeyAndValue(hashMap);

    }

    public BiggestExpenseDTO getBiggestExpenseDTO(String email){
        Map.Entry<String,Double> entry = getBiggestExpense(email);
        BiggestExpenseDTO biggestExpenseDTO1 = new BiggestExpenseDTO();
        biggestExpenseDTO1.setCategory(entry.getKey());
        biggestExpenseDTO1.setAmount(entry.getValue());

        return biggestExpenseDTO1;
    }


}
