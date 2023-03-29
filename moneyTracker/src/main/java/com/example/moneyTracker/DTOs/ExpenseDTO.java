package com.example.moneyTracker.DTOs;

import lombok.*;

@Getter
@Setter
@ToString
public class ExpenseDTO {
    private Double amount;
    private String currency;
    private String email;
    private String expenseCategory;

}
