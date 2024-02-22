package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Transaction;
import com.example.demo.entities.User;
import com.example.demo.repositories.TransactionRepository;


@Service
public class TransactionService {
	
	@Autowired
	TransactionRepository tr;
	
	
	public Transaction saveTransaction(Transaction t) {
		return tr.save(t);
	}	
	
	public Transaction getById(int id) {
		Optional<Transaction> res = tr.findById(id);
		return res.get();
	}
	
	public List<Transaction> getAllOwnerTransactions(User id) {
		return tr.getByOwnerId(id);
	}
	
	public List<Transaction> getAllUserTransactions(User id) {
		return tr.getByUserId(id);
	}
	
	public List<Transaction> getAllTransactions(){
		return tr.findAll();
	}
}
