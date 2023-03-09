package com.example.moneyTracker.service;

import com.example.moneyTracker.DTOs.IncomeDTO;
import com.example.moneyTracker.entities.Income;
import com.example.moneyTracker.entities.User;
import com.example.moneyTracker.repositories.IncomeRepository;
import com.example.moneyTracker.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncomeService {
    private final IncomeRepository incomeRepository;
    private final UserRepository userRepository;
    @Autowired
    public IncomeService(IncomeRepository incomeRepository, UserRepository userRepository) {
        this.incomeRepository = incomeRepository;
        this.userRepository = userRepository;
    }

    public void addIncome(Income income) {
        incomeRepository.save(income);
    }

    public List<Income> getIncomesOfUser(String email){
        return incomeRepository.findIncomesByUserEmail(email);
    }

    public void addIncomeOfUser(IncomeDTO incomeDto, String email)  {
        Income income = new Income();
        User user = userRepository.findUserByEmail(email);
        income.setAmount(incomeDto.getAmount());
        income.setCurrency(incomeDto.getCurrency());
        income.setIncomeCategory(incomeDto.getIncomeCategory());
        income.setUser(user);
        List<Income> incomeList = user.getIncomes();
        incomeList.add(income);
        addIncome(income);
    }


}
