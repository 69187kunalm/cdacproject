package com.example.demo.entities;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="transactions")
public class Transaction {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column
	private LocalDate date;
	
	
	@ManyToOne
	@JsonIgnoreProperties("donetransactions")
	@JoinColumn(name="doneby")
	private User doneby;
	
	
	@ManyToOne
	@JsonIgnoreProperties("receivedtransactionss")
	@JoinColumn(name="touser")
	private User touser;
	
	@Column
	private double amount;
	
	@Column
	private String mode;
	
	@Column
	private boolean status;
	
	public Transaction(LocalDate date2, User u1, User u2, double amount2, String mode2, boolean i) {
		this.date = date2;
		this.doneby = u1;
		this.touser = u2;
		this.amount = amount2;
		this.mode = mode2;
		this.status = i;
	}
	
}
