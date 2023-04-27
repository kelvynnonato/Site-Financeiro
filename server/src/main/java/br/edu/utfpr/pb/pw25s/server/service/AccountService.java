package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.model.Account;
import br.edu.utfpr.pb.pw25s.server.repository.AccountRepository;
import org.springframework.stereotype.Service;

@Service
public interface AccountService extends CrudService<Account, Long>{
}
