package com.example.moneyTracker.repositories;

import com.example.moneyTracker.entities.Income;
import com.example.moneyTracker.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncomeRepository extends JpaRepository<Income, Long> {
    List<Income> findIncomesByUserEmail(String email);

}
