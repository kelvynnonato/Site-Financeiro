package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.model.TypeAccount;
import br.edu.utfpr.pb.pw25s.server.repository.TypeAccountRepository;
import br.edu.utfpr.pb.pw25s.server.service.TypeAccountService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class TypeAccountServiceImpl extends CrudServiceImpl<TypeAccount, Long> implements TypeAccountService {

    private TypeAccountRepository typeAccountRepository;

    public TypeAccountServiceImpl (TypeAccountRepository typeAccountRepository) {this.typeAccountRepository = typeAccountRepository;}

    @Override
    protected JpaRepository<TypeAccount, Long> getRepository() {
        return typeAccountRepository;
    }
}
