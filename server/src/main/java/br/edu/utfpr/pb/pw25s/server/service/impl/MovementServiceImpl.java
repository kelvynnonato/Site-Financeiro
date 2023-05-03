package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.dto.MovementDTO;
import br.edu.utfpr.pb.pw25s.server.model.Movement;
import br.edu.utfpr.pb.pw25s.server.repository.MovementRepository;
import br.edu.utfpr.pb.pw25s.server.service.MovementService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class MovementServiceImpl extends CrudServiceImpl<Movement, Long> implements MovementService{

    private MovementRepository movementRepository;

    public MovementServiceImpl (MovementRepository movementRepository){this.movementRepository = movementRepository;}

    @Override
    protected JpaRepository<Movement, Long> getRepository() {
        return movementRepository;
    }
}
