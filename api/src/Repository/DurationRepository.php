<?php

namespace App\Repository;

use App\Entity\Duration;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Duration|null find($id, $lockMode = null, $lockVersion = null)
 * @method Duration|null findOneBy(array $criteria, array $orderBy = null)
 * @method Duration[]    findAll()
 * @method Duration[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DurationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Duration::class);
    }

    // /**
    //  * @return Duration[] Returns an array of Duration objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Duration
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
