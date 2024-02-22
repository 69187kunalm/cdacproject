package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="location")
public class Location {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int loc_id;
	@Column
	String address;
	@Column
	String pincode;
	@Column
	String city;
	
	@OneToOne
	@JoinColumn(name="user_id")
	@JsonIgnoreProperties("loc")
	User user;

	public Location(String address, String pincode, String city, User user) {
		super();
		this.address = address;
		this.pincode = pincode;
		this.city = city;
		this.user = user;
	}
	
	

}
