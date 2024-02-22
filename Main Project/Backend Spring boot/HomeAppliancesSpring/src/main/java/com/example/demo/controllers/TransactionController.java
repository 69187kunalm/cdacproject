package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.TransactionDao;
import com.example.demo.entities.Transaction;
import com.example.demo.entities.User;
import com.example.demo.services.ApplianceService;
import com.example.demo.services.RoleService;
import com.example.demo.services.TransactionService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TransactionController {
	
	@Autowired
	TransactionService ts;
	
	@Autowired
	RoleService rs;

	@Autowired
	UserService us;
	
	@Autowired
	ApplianceService as;
	
	@PostMapping("/savetransaction")
	public Transaction saveTransaction(@RequestBody TransactionDao t) {
		User u1 = us.getOne(t.getDoneby());
		User u2 = us.getOne(t.getTouser());
		as.updateOnRentStatus(t.getApp_id());
		Transaction t1 = new Transaction(t.getDate(),u1,u2,t.getAmount(),t.getMode(),true,t.getStartdate(),t.getEnddate(),false,t.getApp_id(),t.getUpi_id());
		return ts.saveTransaction(t1);
	}
	
	@GetMapping("/getallownertransactions")
	public List<Transaction> getAllOwnerTransactions(@RequestParam int id){
		User u1 = us.getOne(id);
		return ts.getAllOwnerTransactions(u1);
	}
	
	@GetMapping("/getallusertransactions")
	public List<Transaction> getAllUserTransactions(@RequestParam int id){
		User u1 = us.getOne(id);
		return ts.getAllUserTransactions(u1);
	}
	
	@GetMapping("/getalltransactions")
	public List<Transaction> getAllTranasctions(){
		return ts.getAllTransactions();
	}
	
}
