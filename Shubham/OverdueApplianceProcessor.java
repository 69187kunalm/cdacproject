package com.example.demo.components;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.demo.entities.Appliance;
import com.example.demo.services.ApplianceService;

@Component
public class OverdueApplianceProcessor {
	@Autowired
    private ApplianceService applianceService; 

    @Scheduled(fixedRate = 30000) 
    public void processOverdueAppliances() {
    	
        List<Appliance> overdueAppliances = applianceService.findOverdueAppliances();
        
        System.out.println("Inside component");
        for (Appliance appliance : overdueAppliances) {
            appliance.setOnrent(0);
            applianceService.updateApp(appliance);
        }
    }
}
