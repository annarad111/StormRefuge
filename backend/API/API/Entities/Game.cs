namespace API.Entities
{
    public class Game
    {
        public int Id { get; set; }
        public string ?background_image { get; set; }
        public int ?playtime { get; set; }

        public int ?metacritic { get; set; }

        public float ?rating { get; set; }

        public int ?ratings_count { get; set; }
        public string ?released { get; set; }


        public string ?name { get; set; }

        public string ?description { get; set; }

        public int ?game_series { get; set; }
        public string ?website { get; set; }


    }
}
