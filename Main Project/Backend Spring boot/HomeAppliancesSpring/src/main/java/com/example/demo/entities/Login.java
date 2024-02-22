package com.example.demo.entities;

import java.util.HashSet;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "login")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Login {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int login_id;
	
	@Column
	private String email;
	
	@Column
	private String password;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="role_id")
	@JsonIgnoreProperties("logins")
	Role role;
	
	@JsonIgnoreProperties("login")
	@OneToMany(mappedBy = "login",cascade = CascadeType.ALL)
	private Set<User> users = new HashSet<User>();
	
	public Login(String email, String password, Role role) {
		this.email = email;
		this.password = password;
		this.role = role;
	}
}
