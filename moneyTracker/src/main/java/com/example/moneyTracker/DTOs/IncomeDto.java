package com.example.moneyTracker.DTOs;

import com.example.moneyTracker.entities.IncomeCategory;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IncomeDto {
    private Double amount;
    private String currency;
    private String email;
    private IncomeCategory incomeCategory;
}
