package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.AccountDTO;
import br.edu.utfpr.pb.pw25s.server.dto.UserDTO;
import br.edu.utfpr.pb.pw25s.server.model.Account;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.service.AccountService;
import br.edu.utfpr.pb.pw25s.server.service.CrudService;
import br.edu.utfpr.pb.pw25s.server.shared.GenericResponse;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("accounts")
public class AccountController extends CrudController<Account, AccountDTO, Long>{

    private static AccountService accountService;

    private static ModelMapper modelMapper;

    public AccountController(AccountService accountService,
                             ModelMapper modelMapper){
        super(Account.class, AccountDTO.class);
        this.accountService = accountService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected CrudService<Account, Long> getService() {
        return this.accountService;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return this.modelMapper;
    }
}
