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
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column
	private LocalDate startdate;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column
	private LocalDate enddate;
	
	@Column
	private boolean verified;
	
	@Column
	private int app_id;
	
//	public Transaction(LocalDate date2, User u1, User u2, double amount2, String mode2, boolean i,LocalDate startdate,LocalDate enddate,boolean verified,Appliance app) {
//		this.date = date2;
//		this.doneby = u1;
//		this.touser = u2;
//		this.amount = amount2;
//		this.mode = mode2;
//		this.status = i;
//		this.startdate = startdate;
//		this.enddate = enddate;
//		this.verified = verified;
//		this.app = app;
//	}
	
	@Column
	String upi_id;

	public Transaction(LocalDate date2, User u1, User u2, double amount2, String mode2, boolean i, LocalDate startdate2,
			LocalDate enddate2, boolean verified2, int app_id,String upi_id) {
		this.date = date2;
		this.doneby = u1;
		this.touser = u2;
		this.amount = amount2;
		this.mode = mode2;
		this.status = i;
		this.startdate = startdate2;
		this.enddate = enddate2;
		this.verified = verified2;
		this.app_id = app_id;
		this.upi_id = upi_id;
	}
	
}
