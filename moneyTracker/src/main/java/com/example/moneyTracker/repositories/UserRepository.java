package com.example.moneyTracker.repositories;

import com.example.moneyTracker.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
