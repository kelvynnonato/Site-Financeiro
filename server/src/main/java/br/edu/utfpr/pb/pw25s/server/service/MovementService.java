package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.model.Movement;
import org.springframework.stereotype.Service;

@Service
public interface MovementService extends CrudService<Movement, Long> {
}
