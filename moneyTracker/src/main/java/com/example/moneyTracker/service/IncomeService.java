package com.example.moneyTracker.service;

import com.example.moneyTracker.entities.Income;
import com.example.moneyTracker.repositories.IncomeRepository;
import com.example.moneyTracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IncomeService {
    private final IncomeRepository incomeRepository;
    private final UserRepository userRepository;
    @Autowired
    public IncomeService(IncomeRepository incomeRepository1, UserRepository userRepository) {
        this.incomeRepository = incomeRepository1;
        this.userRepository = userRepository;
    }

    public void addInvoice(Income income) {
        incomeRepository.save(income);
    }


}
