package com.example.moneyTracker.DTOs;

import com.example.moneyTracker.entities.User;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {
    private String email;
    private String userName;
    private User user;

}
