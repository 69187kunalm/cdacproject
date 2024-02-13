package com.example.demo.entities;


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
@Table(name="appliances")
public class Appliance {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int App_id;
	
	@Column
	String name;
	
	@Column
	String description;
	
	@Column
	byte[] image;
	
	@Column
	String pricepermonth;
	
	@ManyToOne
	@JsonIgnoreProperties("appliances")
	@JoinColumn(name="user_id")
	User user;
	
	
	@ManyToOne
	@JsonIgnoreProperties("appliances")
	@JoinColumn(name="cat_id")
	Category category;


	public Appliance(String name, String description, byte[] image, String pricepermonth,
			User user, Category category) {
		this.name = name;
		this.description = description;
		this.image= image;
		this.pricepermonth = pricepermonth;
		this.user = user;
		this.category = category;
	}

  

}
