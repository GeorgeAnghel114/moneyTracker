package com.example.moneyTracker.DTOs;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class IncomeDTO {
    private Double amount;
    private String currency;
    private String email;
    private String incomeCategory;
}
