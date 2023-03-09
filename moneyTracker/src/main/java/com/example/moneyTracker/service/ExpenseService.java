package com.example.moneyTracker.service;

import com.example.moneyTracker.DTOs.ExpenseDTO;
import com.example.moneyTracker.DTOs.IncomeDTO;
import com.example.moneyTracker.entities.Expense;
import com.example.moneyTracker.entities.Income;
import com.example.moneyTracker.entities.User;
import com.example.moneyTracker.repositories.ExpenseRepository;
import com.example.moneyTracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;
    @Autowired
    public ExpenseService(ExpenseRepository expenseRepository, UserRepository userRepository) {
        this.expenseRepository = expenseRepository;
        this.userRepository = userRepository;
    }

    public void addExpense(Expense expense) {
        expenseRepository.save(expense);
    }

    public List<Expense> getIncomesOfUser(String email){
        return expenseRepository.findExpenseByUserEmail(email);
    }

    public void addIncomeOfUser(ExpenseDTO expenseDTO, String email)  {
        Income income = new Income();
        Expense expense = new Expense();
        User user = userRepository.findUserByEmail(email);
        expense.setAmount(expenseDTO.getAmount());
        expense.setCurrency(expenseDTO.getCurrency());
        expense.setIncomeCategory(expenseDTO.getIncomeCategory());
        expense.setUser(user);
        List<Expense> expenseList = user.getExpenses();
        expenseList.add(expense);
        addExpense(expense);
    }



}
