package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
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
@Table(name = "user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int user_id;
	
	@Column
	String fname;
	
	@Column
	String lname;
	
	@Column
	int active;
	
	
	@Column
	String contactno;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
	@JsonIgnoreProperties("users")
	Login login;
	
	public User(String fname, String lname, int i, String contactno, Login lg1) {
		this.fname = fname;
		this.lname = lname;
		this.active = i;
		this.contactno = contactno;
		this.login = lg1;
	}
}
