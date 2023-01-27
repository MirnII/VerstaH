USE [Versta]
GO

/****** Object:  Table [dbo].[SP]    Script Date: 23.01.2023 17:24:00 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Orders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[order] [nvarchar](MAX) NOT NULL,
	[sendCity] [nvarchar](MAX) NOT NULL,
	[sendAddress] [nvarchar](MAX) NOT NULL,
	[recipCity] [nvarchar](MAX) NOT NULL,
	[recipAddress] [nvarchar](MAX) NOT NULL,
	[cargoWeight] int NOT NULL,
	[pickupDate] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


