package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.LocationDao;
import com.example.demo.entities.Location;
import com.example.demo.services.LocationService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LocationController {
        
	@Autowired
	LocationService ls;
	
	@PostMapping("/saveLocation")
	public Location SaveLoaction(@RequestBody LocationDao loc)
	{
		return ls.saveLocation(loc);
	}
}
