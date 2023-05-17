package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.model.Account;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.repository.AccountRepository;
import br.edu.utfpr.pb.pw25s.server.service.AccountService;
import br.edu.utfpr.pb.pw25s.server.service.AuthService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl extends CrudServiceImpl<Account, Long> implements AccountService {
    private final AuthService authService;

    private AccountRepository accountRepository;

    public AccountServiceImpl (AuthService authService, AccountRepository accountRepository){
        this.authService = authService;
        this.accountRepository = accountRepository;
    }

    @Override
    protected JpaRepository<Account, Long> getRepository() {
        return accountRepository;
    }

    @Override
    public Account save(Account entity) {
        //nesse lugar tem que setar o usuario logado
        //para pegar o usuario autenticado tem que user o securitycontextholder
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = (User) authService.loadUserByUsername(username);
        entity.setUser(user);
        return super.save(entity);
    }
}
