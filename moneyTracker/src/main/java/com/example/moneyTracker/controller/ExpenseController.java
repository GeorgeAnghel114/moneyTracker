package com.example.moneyTracker.controller;

import com.example.moneyTracker.DTOs.ExpenseDTO;
import com.example.moneyTracker.entities.Expense;
import com.example.moneyTracker.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/expense")
@RestController
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping("/add-expense/{email}")
    public void addUserExpense(@PathVariable String email, @RequestBody ExpenseDTO expenseDTO){
        expenseService.addExpenseOfUser(expenseDTO,email);
    }

    @GetMapping("/get-expenses/{email}")
    public List<Expense> getUserExpenses(@PathVariable String email){
        return expenseService.getExpensesOfUser(email);
    }
}
