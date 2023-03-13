package com.example.moneyTracker.repositories;

import com.example.moneyTracker.entities.Expense;
import com.example.moneyTracker.entities.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findExpenseByUserEmail(String email);


}
