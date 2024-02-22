package com.example.demo.dao;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TransactionDao {
	LocalDate date;
	int doneby;
	int touser;
	double amount;
	String mode;
	LocalDate startdate;
	LocalDate enddate;
	int app_id;
	String upi_id;
}
