package com.example.moneyTracker.controller;

import com.example.moneyTracker.DTOs.ExpenseDTO;
import com.example.moneyTracker.entities.Expense;
import com.example.moneyTracker.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/", methods = {RequestMethod.PUT, RequestMethod.GET, RequestMethod.DELETE, RequestMethod.POST})
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

    @GetMapping("/get-total-cost-expenses/{email}")
    public Double getTotalCostOfExpenses(@PathVariable String email){
        return expenseService.getTotalCostExpenses();


    }
}
