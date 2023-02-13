package com.example.moneyTracker.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="transactions")
public class Transaction {

    @Id
    private Long id;

    @OneToMany
    private List<Income> incomes;

    @OneToMany
    private List<Expense> expenses;

    private Double total;
}
