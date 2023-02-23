package com.example.moneyTracker.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="accounts")
public class Account {
    @Id
    private Long id;
    private String accountName;
    private Double amount;
    private String currency;
    @OneToOne
    private Expense expense;
    @OneToOne
    private Income income;
}