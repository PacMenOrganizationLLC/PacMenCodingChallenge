namespace api.models;

public class Competition 
{
  public int Id { get; set; }
  public int GameId { get; set; }
  public int EventId { get; set; }
  public DateTime StartAt { get; set; }
  public DateTime EndAt { get; set; }
  public string Location { get; set; }
}