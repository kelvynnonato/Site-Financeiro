package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.model.Situation;
import br.edu.utfpr.pb.pw25s.server.repository.SituationRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class SituationServiceImpl extends CrudServiceImpl<Situation, Long> {

    private SituationRepository situationRepository;

    @Override
    protected JpaRepository<Situation, Long> getRepository() {
        return situationRepository;
    }
}
