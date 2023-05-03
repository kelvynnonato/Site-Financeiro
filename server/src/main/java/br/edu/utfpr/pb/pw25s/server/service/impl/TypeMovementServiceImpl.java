package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.model.TypeMovement;
import br.edu.utfpr.pb.pw25s.server.repository.TypeMovementRepository;
import br.edu.utfpr.pb.pw25s.server.service.TypeMovementService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class TypeMovementServiceImpl extends CrudServiceImpl<TypeMovement, Long> implements TypeMovementService {

    private TypeMovementRepository typeMovementRepository;

    public TypeMovementServiceImpl (TypeMovementRepository typeMovementRepository) {
        this.typeMovementRepository = typeMovementRepository;
    }

    @Override
    protected JpaRepository<TypeMovement, Long> getRepository() {
        return typeMovementRepository;
    }
}
