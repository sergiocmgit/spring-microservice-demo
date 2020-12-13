package microservices.book.gamification.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import microservices.book.gamification.domain.LeaderBoardRow;

import microservices.book.gamification.service.LeaderBoardService;

/**
* This class implements a REST API for the Gamification LeaderBoard service.
*/
//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/leaders")
class LeaderBoardController {
	
	private final LeaderBoardService leaderBoardService;
	public LeaderBoardController(final LeaderBoardService leaderBoardService) {
		this.leaderBoardService = leaderBoardService;
	}
	@GetMapping
	public List<LeaderBoardRow> getLeaderBoard() {
		return leaderBoardService.getCurrentLeaderBoard();
	}
}
