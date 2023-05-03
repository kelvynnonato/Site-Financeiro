package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.controller.SituationController;
import br.edu.utfpr.pb.pw25s.server.model.Situation;
import br.edu.utfpr.pb.pw25s.server.repository.SituationRepository;
import br.edu.utfpr.pb.pw25s.server.service.SituationService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class SituationServiceImpl extends CrudServiceImpl<Situation, Long> implements SituationService {

    private SituationRepository situationRepository;

    public SituationServiceImpl(SituationRepository situationRepository){
        this.situationRepository = situationRepository;
    }

    @Override
    protected JpaRepository<Situation, Long> getRepository() {
        return situationRepository;
    }
}
