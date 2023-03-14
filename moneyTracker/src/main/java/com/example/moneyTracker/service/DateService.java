package com.example.moneyTracker.service;

import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

@Service
public class DateService {

    public int getMonthAsInt(Date date){
        LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        int month = localDate.getMonthValue();
        System.out.println(month);
        return month;
    }

    public int getCurrentMonthAsInt(){
        Date date = new Date();
        LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        int currentMonthAsInt = localDate.getMonthValue();
        System.out.println(currentMonthAsInt);
        return currentMonthAsInt;
    }

}
