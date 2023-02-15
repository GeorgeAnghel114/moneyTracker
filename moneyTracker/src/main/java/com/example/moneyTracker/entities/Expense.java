package com.example.moneyTracker.entities;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="expenses")
public class Expense {

    @Id
    private Long id;
    @OneToOne
    private Account account;
    private Double amount;
    private String currency;
    private ExpenseCategory expenseCategory;
    private Date date;
    private String note;
}
