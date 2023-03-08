package com.example.moneyTracker.controller;

import com.example.moneyTracker.DTOs.IncomeDTO;
import com.example.moneyTracker.entities.Income;
import com.example.moneyTracker.service.IncomeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/api/income")
@RestController
//It includes the @Controller and @ResponseBody annotations,
// and as a result, simplifies the controller implementatio
public class IncomeController {
    private final IncomeService incomeService;

    public IncomeController(IncomeService incomeService) {
        this.incomeService = incomeService;
    }
    @GetMapping("/get-incomes/{email}")
    public List<Income> getUserIncomes(@PathVariable String email){
        return incomeService.getIncomesOfUser(email);
    }

    @PostMapping("/add-income/{email}")
    public void addUserIncome(@PathVariable String email, @RequestBody IncomeDTO incomeDto) throws ClassNotFoundException {
        incomeService.addIncomeOfUser(incomeDto,email);
    }

}
