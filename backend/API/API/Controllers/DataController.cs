using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PagedList;

namespace API.Controllers
{
    public class DataController:BaseApiController
    {
        private readonly RefugeDbContext _context;
        private List<Game> games;

        public DataController(RefugeDbContext context)
        {
            _context = context;
             games = new List<Game>();
        }
        [HttpPost("addgame")]
        public async Task<ActionResult> GameAdd(List<Game> gamesAdded)
        {
            foreach (var game in gamesAdded)
            {
                if(_context.Games.FirstOrDefault(c => c.Id == game.Id) == null)
                {
                    var newgame = new Game
                    {
                        Id = game.Id,
                        background_image = game.background_image,
                        playtime = game.playtime,
                        description = game.description,
                        game_series = game.game_series,
                        metacritic = game.metacritic,
                        name = game.name,
                        rating = game.rating,
                        ratings_count = game.ratings_count,
                        released = game.released,
                        website = game.website
                    };
                    _context.Add(newgame);
                }
                else
                {
                    continue;
                }
                
            }
            _context.SaveChanges();
            return StatusCode(201);
        }


        [HttpPost("addnewgame")]
        public async Task<ActionResult> GameNewAdd(Game game)
        {

            if (_context.Games.FirstOrDefault(c => c.Id == game.Id) == null)
            {
                var newgame = new Game
                {
                    Id = game.Id,
                    background_image = game.background_image,
                    playtime = game.playtime,
                    description = game.description,
                    game_series = game.game_series,
                    metacritic = game.metacritic,
                    name = game.name,
                    rating = game.rating,
                    ratings_count = game.ratings_count,
                    released = game.released,
                    website = game.website
                };
                _context.Add(newgame);
                _context.SaveChanges();
                return StatusCode(201);
            }return StatusCode(401); 
        }

            


        [HttpPost("addgamelist")]
        public async Task<IActionResult> GameList(Game game)
        {
            var newgame = new Game
            {
                Id = game.Id,
                background_image = game.background_image,
                playtime = game.playtime,
                description = game.description,
                game_series = game.game_series,
                metacritic = game.metacritic,
                name = game.name,
                rating = game.rating,
                ratings_count = game.ratings_count,
                released = game.released,
                website = game.website
            };
            games.Add(game);
            await GameAdd(games);
            return StatusCode(201);
        }

        [HttpGet("reallyallgames")]
        public async Task<ActionResult<List<Game>>> GetAllGames()
        {
            return await _context.Games.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetProduct(int id)
        {
            return await _context.Games.FindAsync(id);
        }

        [HttpGet("allgames")]
        public async Task<ActionResult<List<Game>>> GetProducts(int? page)
        {
                var size = new List<Game>();
                if(page == 0 || page == null || page == 1)
            {
                var firstPage = _context.Games
                .OrderBy(b => b.Id)
                .Take(10);
                size = firstPage.ToList();
                var lastId = size[size.Count() - 1].Id;

            }

                var nextPage = _context.Games
                .OrderBy(b => b.Id)
                .Where(b => b.Id > lastId)
                .Take(10);


            return await nextPage.ToListAsync();
        }

    }


}
