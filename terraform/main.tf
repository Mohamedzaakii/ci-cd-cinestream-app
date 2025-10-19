provider "aws" {
  region = "eu-west-1"
}

resource "aws_key_pair" "app-key" {
   key_name = "app-key"
   public_key = file("${path.module}/id_rsa.pub") 

}

resource "aws_security_group" "app-sg" {
  name = "app-sg"
    ingress {
      description = "SSH"
      from_port   = 22
      to_port     = 22
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
  }
  
    ingress {
      description = "Frontend HTTP"
      from_port   = 3000
      to_port     = 3000
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
  }  

    ingress {
      description = "Backend API"
      from_port   = 5000
      to_port     = 5000
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"]
  }
   
    egress {
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "app" {
  ami = "ami-033a3fad07a25c231"
  instance_type = "t2.micro"
  key_name = aws_key_pair.app-key.key_name
  vpc_security_group_ids = [ aws_security_group.app-sg.id ]
  tags = {
    Name = "CineStreamDemo"
  }
  user_data = <<EOF
              #!/bin/bash
              dnf update -y
              dnf install -y docker
              systemctl start docker
              systemctl enable docker
              usermod -aG docker ec2-user
              dnf install -y docker-compose-plugin
              dnf install -y git
              cd /home/ec2-user
              git clone https://github.com/Mohamedzaakii/ci-cd-cinestream-app.git
              cd ci-cd-cinestream-app
              docker compose up -d --build
              EOF
}
               



















