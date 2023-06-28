package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.dto.MovementDTO;
import br.edu.utfpr.pb.pw25s.server.model.Account;
import br.edu.utfpr.pb.pw25s.server.model.Movement;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.repository.AccountRepository;
import br.edu.utfpr.pb.pw25s.server.repository.MovementRepository;
import br.edu.utfpr.pb.pw25s.server.service.AuthService;
import br.edu.utfpr.pb.pw25s.server.service.MovementService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class MovementServiceImpl extends CrudServiceImpl<Movement, Long> implements MovementService{

    private final AuthService authService;

    private MovementRepository movementRepository;

    private AccountRepository accountRepository;

    public MovementServiceImpl (AuthService authService, MovementRepository movementRepository, AccountRepository accountRepository) {
        this.movementRepository = movementRepository;
        this.authService = authService;
        this.accountRepository = accountRepository;

    }

    @Override
    protected JpaRepository<Movement, Long> getRepository() {
        return movementRepository;
    }

    @Override
    public List<Movement> findAll() {
        String username = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = (User) authService.loadUserByUsername(username);
        return movementRepository.findByAccountUserId(user.getId());
    }

    @Override
    public Movement save(Movement movement) {
        // tu tem que buscar a account da receita ou despesa (onde esta o id da account?)
        // depois de acordo com o tipo (RECEITA ou DESPESA) ajusta o valor do saldo da account retornada
        // salva a accout com o novo saldo ... e ok

        Account account = accountRepository.findById(movement.getAccount().getId()).orElse(new Account());
        Long id = movement.getAccount().getId();
        Long type = movement.getType().getId();
        Long balance = account.getBalance();

        if(type==1){
            account.setBalance(account.getBalance()+ movement.getValueAmount().longValue());
        }else{
            account.setBalance(account.getBalance()- movement.getValueAmount().longValue());
        }

        accountRepository.save(account);

        return super.save(movement);
    }
}
