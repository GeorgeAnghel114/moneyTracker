package com.example.moneyTracker.DTOs;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BiggestIncomeDTO {
    private String category;
    private Double amount;
}

