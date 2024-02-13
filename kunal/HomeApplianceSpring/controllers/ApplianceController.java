package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.Appliancedao;
import com.example.demo.entities.Appliance;
import com.example.demo.services.ApplianceService;

@RestController

public class ApplianceController {

	@Autowired
	ApplianceService as;
	
	@PostMapping("/saveappliance")
	public Appliance SaveAppliance(@RequestBody Appliancedao app)
	{
		return as.saveApp(app);
	}
	
}
