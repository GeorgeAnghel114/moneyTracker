package com.example.moneyTracker.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name="income_categories")
public class IncomeCategory {
    @Id
    private Long id;
    private String incomeCategoryName;
    @JsonManagedReference
    @OneToMany
    private List<Income> incomeList;


}
