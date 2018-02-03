10.times do |proposal|
  Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: "http://bradyberryessa.com",
    tools: "Ruby on Rails, Angular 2, and Postgresql",
    estimated_hours: (80 + proposal),
    hourly_rate: 120, 
    weeks_to_complete: 12,
    client_email: 'brady.berryessa@gmail.com'
  )
end