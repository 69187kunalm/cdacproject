package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dao.Appliancedao;
import com.example.demo.entities.Appliance;
import com.example.demo.services.ApplianceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ApplianceController {

	@Autowired
	ApplianceService as;
	
	@PostMapping("/saveappliance")
	public Appliance SaveAppliance(@RequestBody Appliancedao app)
	{
		return as.saveApp(app);
	}
	
	@PostMapping(value = "/uploadimage/{appid}",consumes = "multipart/form-data")
	public boolean uploadImage(@PathVariable("appid") int id, @RequestBody MultipartFile file ) {
		boolean flag = true;
		try {
			as.upload(id, file.getBytes());
		} catch (Exception e) {
			e.printStackTrace();
			flag = false;
		}
		return flag;
	}
	
	@GetMapping("/getAppliances")
	public List<Appliance> getVerifiedAppliances() {
		return  as.getApplianceVerified();
	}
	@GetMapping("/deleteAppliance")
	public int delAppliance(@RequestParam int id)
	{
		return as.deleteAppliance(id);
	}
	@PutMapping("/verify/{id}")
    public int verifyAppliance(@PathVariable int id) {
        
            return as.verifyAppliance(id);
           
        
    }
	
	
	
}