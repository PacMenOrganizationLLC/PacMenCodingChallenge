﻿namespace api.models;

public class GameEndpoint
{
    public int Id { get; set; }
    public string Endpoint { get; set; }
    public int GameId { get; set; }
    public int EndpointTypeId { get; set; }

    public EndpointType? EndpointType { get; set; }
    public Game? Game {get; set;}
}
