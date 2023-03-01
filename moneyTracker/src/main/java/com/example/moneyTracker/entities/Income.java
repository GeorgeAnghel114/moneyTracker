package com.example.moneyTracker.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="incomes")
public class Income {
    @Id
    private Long id;
    private Double amount;
    private String currency;
    @ManyToOne
    @JsonBackReference
    private User user;

}
